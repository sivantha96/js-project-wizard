import expressPackageJson from './express.package.json';
import expressTsConfigJson from './express.tsconfig.json';
import expressGitIgnore from './express.gitignore';
import expressPrettierrc from './express.prettierrc';
import expressEslintrc from './express.eslintrc.js';
import expressEnv from './express.env';
import expressServerConfig from './lib/config/server.config.ts';
import expressMongoConfig from './lib/config/mongo.config.ts';
import expressSwagger from './lib/config/swagger.json';
import expressErrorHandler from './lib/modules/common/middleware/global-error-handler.middleware.ts';
import expressResponseService from './lib/modules/common/services/response.service.ts';
import expressCommonRoutes from './lib/modules/common/routes.ts';
import expressRoutes from './lib/routes.ts';
import expressServer from './lib/server.ts';

const getExpressScriptFile = (
  projectName,
  projectDescription,
  projectAuthor
) => {
  let stringifiedPackageJson,
    stringifiedTsConfigJson,
    stringifiedPrettierrc,
    stringifiedGitIgnore,
    stringifiedEslintrc,
    stringifiedEnv,
    stringifiedServerConfig,
    stringifiedMongoConfig,
    stringifiedSwagger,
    stringifiedErrorHandler,
    stringifiedResponseService,
    stringifiedCommonRoutes,
    stringifiedRoutes,
    stringifiedServer;

  return Promise((resolve, reject) => {
    const name = projectName;
    const description = projectDescription;
    const author = projectAuthor;
    fetch(expressPackageJson)
      .then((r) => r.text())
      .then((text) => {
        stringifiedPackageJson = text;
        fetch(expressTsConfigJson);
      })
      .then((r) => r.text())
      .then((text) => {
        stringifiedTsConfigJson = text;
        fetch(expressGitIgnore);
      })
      .then((r) => r.text())
      .then((text) => {
        stringifiedGitIgnore = text;
        fetch(expressPrettierrc);
      })
      .then((r) => r.text())
      .then((text) => {
        stringifiedPrettierrc = text;
        fetch(expressEslintrc);
      })
      .then((r) => r.text())
      .then((text) => {
        stringifiedEslintrc = text;
        fetch(expressEnv);
      })
      .then((r) => r.text())
      .then((text) => {
        stringifiedEnv = text;
        fetch(expressServerConfig);
      })
      .then((r) => r.text())
      .then((text) => {
        stringifiedServerConfig = text;
        fetch(expressMongoConfig);
      })
      .then((r) => r.text())
      .then((text) => {
        stringifiedMongoConfig = text;
        fetch(expressSwagger);
      })
      .then((r) => r.text())
      .then((text) => {
        stringifiedSwagger = text;
        fetch(expressErrorHandler);
      })
      .then((r) => r.text())
      .then((text) => {
        stringifiedErrorHandler = text;
        fetch(expressResponseService);
      })
      .then((r) => r.text())
      .then((text) => {
        stringifiedResponseService = text;
        fetch(expressCommonRoutes);
      })
      .then((r) => r.text())
      .then((text) => {
        stringifiedCommonRoutes = text;
        fetch(expressRoutes);
      })
      .then((r) => r.text())
      .then((text) => {
        stringifiedRoutes = text;
        fetch(expressServer);
      })
      .then((r) => r.text())
      .then((text) => {
        stringifiedServer = text;
        const mainFile = `
        const fs = require("fs");
        const { series } = require("async");
        const { exec } = require("child_process");
        const targetPackageJson = "./package.json";
        const targetTsConfigJson = "./tsconfig.json";
        const targetGitIgnore  = "./.gitignore";
        const targetPrettierrc  = "./.prettierrc";
        const targetEslintrc  = "./.eslintrc.js";
        const targetEnv  = "./.env";
        const targetEnvLocal  = "./.env.local";
        const targetServerConfig  = "./lib/config/server.config.ts";
        const targetMongoConfig  = "./lib/config/mongo.config.ts";
        const targetSwagger  = "./lib/config/swagger.json";
        const targetErrorHandler  = "./lib/modules/common/middleware/global-error-handler.middleware.ts";
        const targetServices  = "./lib/modules/common/middleware/response.service.ts";
        const targetCommonRoutes  = "./lib/modules/common/routes.ts";
        const targetRoutes  = "./lib/routes.ts";
        const targetServer = "./lib/server.ts";
      
        const targetConfig  = "./lib/config";
        const targetCommonMiddleware  = "./lib/modules/common/middleware";
        const targetCommonServices  = "./lib/modules/common/services";
      
        const stringifiedPackageJson = '${stringifiedPackageJson}'
        const packageJson = JSON.parse(stringifiedPackageJson)
        packageJson.name = "${name}";
        packageJson.description = "${description}";
        packageJson.author = "${author}";
      
        const stringifiedTsConfigJson = ${stringifiedTsConfigJson}
        const stringifiedGitIgnore = ${stringifiedGitIgnore}
        const stringifiedPrettierrc = ${stringifiedPrettierrc}
        const stringifiedEslintrc = ${stringifiedEslintrc}
        const stringifiedEnv = ${stringifiedEnv}
        const stringifiedServerConfig = ${stringifiedServerConfig}
        const stringifiedMongoConfig = ${stringifiedMongoConfig}
        const stringifiedSwagger = ${stringifiedSwagger}
        const stringifiedErrorHandler = ${stringifiedErrorHandler}
        const stringifiedResponseService = ${stringifiedResponseService}
        const stringifiedCommonRoutes = ${stringifiedCommonRoutes}
        const stringifiedRoutes = ${stringifiedRoutes}
        const stringifiedServer = ${stringifiedServer}
      
        series([
          () => {
            fs.writeFile(targetPackageJson, JSON.stringify(packageJson, null, 2), () => {});
            fs.writeFile(targetTsConfigJson, stringifiedTsConfigJson, () => {});
            fs.writeFile(targetGitIgnore, stringifiedGitIgnore, () => {});
            fs.writeFile(targetPrettierrc, stringifiedPrettierrc, () => {});
            fs.writeFile(targetEslintrc, stringifiedEslintrc, () => {});
            fs.writeFile(targetEnv, stringifiedEnv, () => {});
            fs.writeFile(targetEnvLocal, stringifiedEnv, () => {});
            if (!fs.existsSync(targetConfig)){
              fs.mkdirSync(targetConfig, { recursive: true });
            }
            fs.writeFile(targetServerConfig, stringifiedServerConfig, () => {});
            fs.writeFile(targetMongoConfig, stringifiedMongoConfig, () => {});
            fs.writeFile(targetSwagger, stringifiedSwagger, () => {});
            if (!fs.existsSync(targetCommonMiddleware)){
              fs.mkdirSync(targetCommonMiddleware, { recursive: true });
            }
            fs.writeFile(targetErrorHandler, stringifiedErrorHandler, () => {});
            if (!fs.existsSync(targetCommonServices)){
              fs.mkdirSync(targetCommonServices, { recursive: true });
            }
            fs.writeFile(targetServices, stringifiedResponseService, () => {});
            fs.writeFile(targetCommonRoutes, stringifiedCommonRoutes, () => {});
            fs.writeFile(targetRoutes, stringifiedRoutes, () => {});
            fs.writeFile(targetServer, stringifiedServer, () => {});
            exec("npm install");
          },
        ]);
        `;
        resolve(mainFile);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default getExpressScriptFile;
