interface ApiConfig {
  apiBasePath: string;
  contentBasePath: string;
}

export const API_CONFIG: ApiConfig = {
  apiBasePath: 'http://localhost:3000/api',
  contentBasePath: 'http://localhost:3000/resource',
};
