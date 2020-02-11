class UserMailer < ApplicationMailer
  default from: "postmaster.iedb@gmail.com"

  def welcome_email(user)
    @user = user
    mail(to: @user.email, subject: "Welcome #{@user.name}")
  end

  def reset_email(user)
    @user = user
    mail(to: @user.email, subject: "Password reset link IEDB")
  end
end