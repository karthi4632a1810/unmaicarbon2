export const projectSpotlightImages = [
  'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
]

export function buildProjectSlug(project) {
  return `${project.id}-${project.title}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function getProjectSummary(project) {
  if (project.bullets?.length) {
    return project.bullets[0]
  }

  if (project.subsections?.length && project.subsections[0].bullets?.length) {
    return project.subsections[0].bullets[0]
  }

  return 'Climate market advisory and implementation support for global partners.'
}

export function getProjectSpotlightImage(index) {
  return projectSpotlightImages[index % projectSpotlightImages.length]
}
