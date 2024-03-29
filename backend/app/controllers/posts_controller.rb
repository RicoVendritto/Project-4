class PostsController < ApplicationController
  skip_before_action :authorize_request, only: [:index, :show]
  before_action :set_post, only: [:show, :update, :destroy]

  # GET /posts
  def index
    # @posts = current_user.posts
    @posts = Post.all
    json_response(@posts)
  end

  # POST /posts
  def create
    @post = current_user.posts.create!(post_params)
    json_response(@post, :created)
  end

  # GET /posts/:id
  def show
    json_response(@post)
  end

  # PUT /posts/:id
  def update
    @post.update(post_params)
    json_response(status: 'SUCCESS', message: 'updated the post')
  end

  # DELETE /posts/:id
  def destroy
    @post.destroy
    json_response(status: 'SUCCESS', message: 'deleted the post')
  end

  private

  def post_params
    # whitelist params
    params.permit(:title, :video_url, :artist, :description, :category)
  end

  def set_post
    @post = Post.find(params[:id])
  end
end
