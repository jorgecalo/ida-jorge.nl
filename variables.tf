variable "gcp_project_id" {
  type        = string
  description = "The GCP project ID to deploy the resources in."
  default = "ida-jorge-nl"
}

variable "domain_name" {
  type        = string
  description = "The custom domain name for the website."
  default     = "ida-jorge.nl"
}

variable "bucket_name" {
  type        = string
  description = "The name of the GCS bucket. Must be globally unique."
  default     = "ida-jorge-nl-website"
}

variable "region" {
  type        = string
  description = "The GCP region for the GCS bucket."
  default     = "EU" # Using a multi-region like EU is good for availability
}