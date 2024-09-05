# # ECR Repository
# resource "aws_ecr_repository" "myapp" {
#   name = var.ecr_repository_name
# }

# # ECS Cluster
# resource "aws_ecs_cluster" "myapp" {
#   name = var.ecs_cluster_name
# }

# # IAM Role for ECS Task Execution
# resource "aws_iam_role" "ecs_task_execution_role" {
#   name = "ecsTaskExecutionRole"

#   assume_role_policy = jsonencode({
#     Version = "2012-10-17",
#     Statement = [
#       {
#         Action = "sts:AssumeRole",
#         Effect = "Allow",
#         Principal = {
#           Service = "ecs-tasks.amazonaws.com",
#         },
#       },
#     ],
#   })
# }

# # resource "aws_iam_role_policy_attachment" "ecs_task_execution_policy" {
# #   name       = "ecsTaskExecutionPolicyAttachment"
# #   policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
# #   roles      = [aws_iam_role.ecs_task_execution_role.name]
# # }

# # ECS Task Definition
# resource "aws_ecs_task_definition" "myapp" {
#   family                   = var.ecs_task_definition_name
#   execution_role_arn       = aws_iam_role.ecs_task_execution_role.arn
#   network_mode             = "awsvpc"  # Required for Fargate
#   requires_compatibilities = ["FARGATE"]  # Specifies that the task is for Fargate

#   # Task-level CPU and Memory
#   cpu                      = "256"  # e.g., 256 CPU units
#   memory                   = "512"  # e.g., 512 MiB

#   container_definitions = jsonencode([
#     {
#       name      = "myapp-container",
#       image     = "${aws_ecr_repository.myapp.repository_url}:latest",
#       essential  = true,
#       memory     = 512,  # Container-level memory
#       cpu        = 256,  # Container-level CPU
#       portMappings = [
#         {
#           containerPort = var.container_port,
#           hostPort      = var.container_port,
#         },
#       ],
#     },
#   ])
# }

# # ECS Service
# resource "aws_ecs_service" "myapp" {
#   name            = var.ecs_service_name
#   cluster         = aws_ecs_cluster.myapp.id
#   task_definition = aws_ecs_task_definition.myapp.arn
#   desired_count   = 1
#   launch_type     = "FARGATE"

#   network_configuration {
#     subnets         = ["subnet-0488811c3dd81f079"]  # Replace with your subnet ID
#     security_groups = ["sg-0462883bd0d19da54"]      # Replace with your security group ID
#     assign_public_ip = true  # Optional: Assign public IP if needed
#   }

#   # Optional: Add load balancer configuration if needed
#   # load_balancer {
#   #   target_group_arn = aws_lb_target_group.myapp.arn
#   #   container_name   = "myapp-container"
#   #   container_port   = var.container_port
#   # }

#   # Optional: Set health check grace period
#   # health_check_grace_period_seconds = 60
# }
