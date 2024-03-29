class UsersController < ApplicationController

  skip_before_action :authorize_request, only: :create

  # POST /signup
  # return authenticated token upon signup

  def create
    resp = User.create!(user_params)
    auth_token = AuthenticateUser.new(resp.email, resp.password).call
    response = {message: Message.account_created, auth_token: auth_token, user: user_params}
    json_response(response, :created)
  end

  private

  def user_params
    params.permit(
        :name,
        :email,
        :password,
        :password_confirmation,
        :profile_pic
    )
  end

end