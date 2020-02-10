class ApplicationMailer < ActionMailer::Base
  default from: "postmaster.eidb@gmail.com"
  layout 'mailer'
end