class Admin::BaseController < ApplicationController
  layout "admin"
  before_action :require_admin

  # Methods omitted

  def require_admin
    unless user_signed_in? and current_user.admin?
      redirect_to new_user_session_path
    end
  end
  
end
