import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('skills', 'routes/skills.tsx'),
  route('projects', 'routes/projects.tsx'),
  route('contact', 'routes/contact.tsx'),
  route('search', 'routes/search.tsx'),
] satisfies RouteConfig;
