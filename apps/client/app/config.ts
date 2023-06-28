export type Environment = 'development' | 'staging' | 'test' | 'production';

export type Config = {
  [key in Environment]: {
    api: {
      auth: {
        baseUrl: string;
        login: string;
        logout: string;
        getUser: string;
      };
    };
  };
};

export const config: Config = {
  development: {
    api: {
      auth: {
        baseUrl: process.env.API_AUTH_URL || 'http://localhost:3333/api/users',
        login: '/login',
        logout: '/signout',
        getUser: '/currentuser'
      }
    }
  },
  staging: {
    api: {
      auth: {
        baseUrl: process.env.API_AUTH_URL || 'http://staging/api/users',
        login: '/login',
        logout: '/logout',
        getUser: '/currentuser'
      }
    }
  },
  test: {
    api: {
      auth: {
        baseUrl: process.env.API_AUTH_URL || 'http://testurl',
        login: '/login',
        logout: '/logout',
        getUser: '/currentuser'
      }
    }
  },
  production: {
    api: {
      auth: {
        baseUrl: process.env.API_AUTH_URL || 'http://produrl',
        login: '/login',
        logout: '/logout',
        getUser: '/currentuser'
      }
    }
  }
};
