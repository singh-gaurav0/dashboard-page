// Mock data for the grid table
export interface LeadData {
  id: number
  importedData: string
  lastUpdatedAt: string
  companyName: string
  companyLogo: string
  companyWebsite: string
  linkedInJobUrl: string
  emailStatus: "found" | "not_met" | "pending"
}

export const mockLeads: LeadData[] = [
  {
    id: 1,
    importedData: "Mike Braham",
    lastUpdatedAt: "Oct 12, 2024 at 14:08 PM",
    companyName: "Google",
    companyLogo: "google",
    companyWebsite: "https://www.example.com",
    linkedInJobUrl: "https://www.linkedin.com...",
    emailStatus: "found",
  },
  {
    id: 2,
    importedData: "Alex Johnson",
    lastUpdatedAt: "Oct 12, 2024 at 14:08 PM",
    companyName: "Amazon",
    companyLogo: "amazon",
    companyWebsite: "https://www.sample.com",
    linkedInJobUrl: "https://www.linkedin.com...",
    emailStatus: "found",
  },
  {
    id: 3,
    importedData: "Sarah Thompson",
    lastUpdatedAt: "Oct 12, 2024 at 14:08 PM",
    companyName: "LinkedIn",
    companyLogo: "linkedin",
    companyWebsite: "https://www.testsite.com",
    linkedInJobUrl: "https://www.linkedin.com...",
    emailStatus: "found",
  },
  {
    id: 4,
    importedData: "David Lee",
    lastUpdatedAt: "Oct 12, 2024 at 14:08 PM",
    companyName: "Microsoft",
    companyLogo: "microsoft",
    companyWebsite: "https://www.demo.com",
    linkedInJobUrl: "https://www.linkedin.com...",
    emailStatus: "not_met",
  },
  {
    id: 5,
    importedData: "Emily Carter",
    lastUpdatedAt: "Oct 12, 2024 at 14:08 PM",
    companyName: "TED",
    companyLogo: "ted",
    companyWebsite: "https://www.siteexample...",
    linkedInJobUrl: "https://www.linkedin.com...",
    emailStatus: "not_met",
  },
  {
    id: 6,
    importedData: "James Smith",
    lastUpdatedAt: "Oct 12, 2024 at 14:08 PM",
    companyName: "Unilever",
    companyLogo: "unilever",
    companyWebsite: "https://www.webpage.com",
    linkedInJobUrl: "https://www.linkedin.com...",
    emailStatus: "found",
  },
  {
    id: 7,
    importedData: "Laura White",
    lastUpdatedAt: "Oct 12, 2024 at 14:08 PM",
    companyName: "Apple",
    companyLogo: "apple",
    companyWebsite: "https://www.mywebsite.c...",
    linkedInJobUrl: "https://www.linkedin.com...",
    emailStatus: "not_met",
  },
  {
    id: 8,
    importedData: "Chris Brown",
    lastUpdatedAt: "Oct 12, 2024 at 14:08 PM",
    companyName: "Google",
    companyLogo: "google",
    companyWebsite: "https://www.newsite.com",
    linkedInJobUrl: "https://www.linkedin.com...",
    emailStatus: "not_met",
  },
  {
    id: 9,
    importedData: "Jessica Green",
    lastUpdatedAt: "Oct 12, 2024 at 14:08 PM",
    companyName: "Unilever",
    companyLogo: "unilever",
    companyWebsite: "https://www.uniqueurl.com",
    linkedInJobUrl: "https://www.linkedin.com...",
    emailStatus: "not_met",
  },
  {
    id: 10,
    importedData: "Daniel Harris",
    lastUpdatedAt: "Oct 12, 2024 at 14:08 PM",
    companyName: "Microsoft",
    companyLogo: "microsoft",
    companyWebsite: "https://www.originalsite.c...",
    linkedInJobUrl: "https://www.linkedin.com...",
    emailStatus: "found",
  },
  {
    id: 11,
    importedData: "Megan Clark",
    lastUpdatedAt: "Oct 12, 2024 at 14:08 PM",
    companyName: "Apple",
    companyLogo: "apple",
    companyWebsite: "https://www.freshpage.c...",
    linkedInJobUrl: "https://www.linkedin.com...",
    emailStatus: "found",
  },
  {
    id: 12,
    importedData: "Brian Lewis",
    lastUpdatedAt: "Oct 12, 2024 at 14:08 PM",
    companyName: "TED",
    companyLogo: "ted",
    companyWebsite: "https://www.differentdo...",
    linkedInJobUrl: "https://www.linkedin.com...",
    emailStatus: "not_met",
  },
  {
    id: 13,
    importedData: "Samantha Hall",
    lastUpdatedAt: "Oct 12, 2024 at 14:08 PM",
    companyName: "Google",
    companyLogo: "google",
    companyWebsite: "https://www.alternativesi...",
    linkedInJobUrl: "https://www.linkedin.com...",
    emailStatus: "found",
  },
]

// Empty placeholder rows
export const placeholderRows = [
  { id: 14, importedData: "Google" },
  { id: 15, importedData: "Amazon" },
  { id: 16, importedData: "LinkedIn" },
  { id: 17, importedData: "LinkedIn" },
  { id: 18, importedData: "LinkedIn" },
]
