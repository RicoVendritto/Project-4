class UsersController < ApplicationController
  skip_before_action :authorize_request, only: :create
  # POST /signup
  # return authenticated token upon signup

  def create
    user = User.create!(user_params)
    auth_token = AuthenticateUser.new(user.email, user.password).call
    response = {message: Message.account_created, auth_token: auth_token}
    json_response(response, :created)
    UserMailer.welcome_email(user).deliver
  end

  # def generate_password_token!
  #   self.reset_password_token = generate_token
  #   self.reset_password_sent_at = Time.now.utc
  #   save!
  # end
  #
  # def password_token_valid?
  #   (self.reset_password_sent_at + 4.hours) > Time.now.utc
  # end
  #
  # def reset_password!(password)
  #   self.reset_password_token = nil
  #   self.password = password
  #   save!
  # end

  private

  def user_params
    params.permit(
        :name,
        :email,
        :password,
        :password_confirmation
    )
  end

  # def generate_token
  #   SecureRandom.hex(10)
  # end

end