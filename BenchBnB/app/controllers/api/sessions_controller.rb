class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login!(@user)
    else
      render json: [ 'invalid credentials' ], status: 401
    end
  end

  def destroy
    if logout! 
      render json: {}
    else
      render json: [ 'no user is signed in' ], status: 404
    end
  end

end