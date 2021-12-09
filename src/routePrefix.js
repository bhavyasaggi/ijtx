export default function absRoute(route, domain) {
  const domainString = domain || '/'
  const routeString = (route || '').replace(/^(?:.*?:\/\/(.*))?\//, '')
  return domainString + routeString
}
