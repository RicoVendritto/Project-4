class CommentsController < ApplicationController
  before_action :set_post
  before_action :set_post_comment, only: [:show, :update, :destroy]

  # GET /posts/:post_id/comments
  def index
    json_response(@post.comments)
  end

  # GET /posts/:post_id/comments/:id
  def show
    json_response(@post)
  end

  # POST /posts/:post_id/comments
  def create
    @post.comments.create!(comment_params)
    # json_response(status: "SUCCESS", message: 'comment created successfully.')
    json_response(comment_params)
  end

  # PUT /posts/:post_id/comments/:id
  def update
    @comment.update(comment_params)
    json_response(status: 'SUCCESS', message: 'comment updated successfully.')
  end

  # DELETE /posts/:post_id/comments/:id
  def destroy
    @comment.destroy
    json_response(status: 'SUCCESS', message: 'comment deleted successfully.')
  end

  private

  def comment_params
    params.permit(:comment, :created_by, :user_id)
  end

  def set_post
    @post = Post.find(params[:post_id])
  end

  def set_post_comment
    @comment = @post.comments.find_by!(id: params[:id]) if @post
  end
end