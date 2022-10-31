export default {
  allPlanets: {
    path: '/'
  },
  allResidents: {
    path: '/:planetId/residents',
    buildPath: (planetId) => `/${planetId}/residents`
  },
  resident: {
    path: '/:planetId/resident/:residentId',
    buildPath: (planetId, residentId) => `/${planetId}/resident/${residentId}`
  },
}