
# data "aws_vpc" "default" {
#   default = true
# }


# resource "aws_security_group" "my_app_alb_sg" {
#   name        = "my-app-alb-sg"
#   description = "Security group for my application ALB"
#   vpc_id      = data.aws_vpc.default.id

#   ingress {
#     description = "Allow TCP traffic on port 80 from anywhere"
#     from_port   = 80
#     to_port     = 80
#     protocol    = "tcp"
#     cidr_blocks = ["0.0.0.0/0"]
#   }

#   egress {
#     description = "Allow all outbound traffic"
#     from_port   = 0
#     to_port     = 0
#     protocol    = "-1"  # -1 means all protocols
#     cidr_blocks = ["0.0.0.0/0"]
#   }

#   tags = {
#     Name = "my-app-alb-sg"
#   }

# }


# resource "aws_security_group" "my_app_alb_to_ecs_sg" {
#   name        = "my-app-alb-to-ecs-sg"
#   description = "Security group for ALB to ECS communication"
#   vpc_id      = data.aws_vpc.default.id

#   ingress {
#     description       = "Allow custom TCP traffic on port 3000 from my_app_alb_sg"
#     from_port         = 3000
#     to_port           = 3000
#     protocol          = "tcp"
#     security_groups   = [aws_security_group.my_app_alb_sg.id]
#   }

#   egress {
#     description = "Allow all outbound traffic"
#     from_port   = 0
#     to_port     = 0
#     protocol    = "-1"  # -1 means all protocols
#     cidr_blocks = ["0.0.0.0/0"]
#   }

#   tags = {
#     Name = "my-app-alb-to-ecs-sg"
#   }
# }