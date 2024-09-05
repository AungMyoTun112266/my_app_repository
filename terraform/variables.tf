# Variables
variable "app_name" {
  description = "The name of the application"
  type        = string
  default     = "my-app"
}

variable "ecs_cpu" {
  description = "The amount of CPU to use for the ECS task"
  type        = string
  default     = "256"
}

variable "ecs_memory" {
  description = "The amount of memory to use for the ECS task"
  type        = string
  default     = "512"
}

variable "desired_count" {
  description = "Number of desired ECS tasks"
  type        = number
  default     = 2
}

variable "container_port" {
  description = "The port on which the application listens"
  type        = number
  default     = 3000
}

variable "alb_port" {
  description = "The port on which the ALB listens"
  type        = number
  default     = 80
}

variable "subnets" {
  description = "List of subnets for ECS and ALB"
  type        = list(string)
  default     = ["subnet-0488811c3dd81f079", "subnet-00a49c7016abf6eb9", "subnet-07d08bde89f743e12"]
}

# constant settings
locals {
  image_name    = "my_app_container"
  image_version = "latest"
}
