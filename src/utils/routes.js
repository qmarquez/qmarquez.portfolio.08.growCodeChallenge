export default {
  allResidents: {
    path: '/:planetId/resident/all',
    buildPath: (planetId) => `/${planetId}/resident/all`
  },
  resident: {
    path: '/:planetId/resident/:residentId',
    buildPath: (planetId, residentId) => `/${planetId}/resident/${residentId}`
  },
}