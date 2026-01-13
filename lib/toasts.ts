import { toast } from "sonner"

export function showV2Info(featureName?: string) {
  toast.info("Coming in V2", {
    description: featureName
      ? `${featureName} will be available in a future update.`
      : "This feature will be available in a future update.",
    duration: 3000,
  })
}
