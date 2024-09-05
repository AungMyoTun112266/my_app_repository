resource "aws_ecr_repository" "my_app_repository" {
  name                 = local.image_name
  image_tag_mutability = "MUTABLE"
}
