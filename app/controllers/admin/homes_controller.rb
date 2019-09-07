class Admin::HomesController < AdminController
  skip_load_and_authorize_resource

  def index; end
end
