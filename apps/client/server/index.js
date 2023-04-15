"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// server.ts
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(server_exports);
var import_architect = require("@remix-run/architect");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_node_stream = require("stream"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 45,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 87,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => Root,
  links: () => links5,
  meta: () => meta
});
var import_react3 = require("@remix-run/react");

// app/layouts/MainLayout/main.css
var main_default = "/_static/build/_assets/main-GSGAHYBR.css";

// app/components/Footer/footer.css
var footer_default = "/_static/build/_assets/footer-RJJZ6OAT.css";

// app/components/Footer/index.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: footer_default }
], Footer = ({ footerText }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "footer | container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-normal text-alternate", children: footerText }, void 0, !1, {
    fileName: "app/components/Footer/index.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-small text-secondary", children: [
    "Copyright \xA9 ",
    new Date().getFullYear()
  ] }, void 0, !0, {
    fileName: "app/components/Footer/index.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Footer/index.tsx",
  lineNumber: 15,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/components/Footer/index.tsx",
  lineNumber: 14,
  columnNumber: 3
}, this);

// app/components/Header/index.tsx
var import_react2 = require("@remix-run/react");

// app/components/Header/header.css
var header_default = "/_static/build/_assets/header-KCVSMFTJ.css";

// app/components/Logo.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), Logo = () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-primary text-large", children: "thomblweed" }, void 0, !1, {
  fileName: "app/components/Logo.tsx",
  lineNumber: 2,
  columnNumber: 3
}, this);

// app/components/Navigation/navigation.css
var navigation_default = "/_static/build/_assets/navigation-UED6CGCV.css";

// app/components/Navigation/index.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), links2 = () => [
  { rel: "stylesheet", href: navigation_default }
], Navigation = ({ items, content }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { "aria-label": "primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "navigation-list", children: items.map(({ value, route }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "navigation-item", children: content({ value, route }) }, value, !1, {
  fileName: "app/components/Navigation/index.tsx",
  lineNumber: 24,
  columnNumber: 9
}, this)) }, void 0, !1, {
  fileName: "app/components/Navigation/index.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/components/Navigation/index.tsx",
  lineNumber: 21,
  columnNumber: 3
}, this);

// app/components/Header/index.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), links3 = () => [
  { rel: "stylesheet", href: header_default },
  ...links2()
], Header = () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("header", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "header-container", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Logo, {}, void 0, !1, {
    fileName: "app/components/Header/index.tsx",
    lineNumber: 36,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    Navigation,
    {
      items: [
        { value: "Home", route: "/" },
        { value: "Blog", route: "/blog" }
      ],
      content: ({ value, route }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_react2.NavLink,
        {
          className: ({ isActive }) => "nav-link ".concat(
            isActive ? "nav-link-active" : "text-alternate"
          ),
          to: route,
          children: value
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header/index.tsx",
          lineNumber: 43,
          columnNumber: 13
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/Header/index.tsx",
      lineNumber: 37,
      columnNumber: 9
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/Header/index.tsx",
  lineNumber: 35,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Header/index.tsx",
  lineNumber: 34,
  columnNumber: 5
}, this);

// app/layouts/MainLayout/index.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), links4 = () => [
  { rel: "stylesheet", href: main_default },
  ...links3(),
  ...links()
], MainLayout = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Header, {}, void 0, !1, {
    fileName: "app/layouts/MainLayout/index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { className: "container main", children }, void 0, !1, {
    fileName: "app/layouts/MainLayout/index.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Footer, { footerText: "thomblweed" }, void 0, !1, {
    fileName: "app/layouts/MainLayout/index.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/layouts/MainLayout/index.tsx",
  lineNumber: 16,
  columnNumber: 3
}, this);

// app/styles/reset.css
var reset_default = "/_static/build/_assets/reset-JQ4PWSLL.css";

// app/styles/font.css
var font_default = "/_static/build/_assets/font-2VEWI4I4.css";

// app/styles/styles.css
var styles_default = "/_static/build/_assets/styles-Z2K67XCN.css";

// app/root.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), links5 = () => [
  {
    rel: "preload",
    href: "/images/space-city-1920.jpg",
    as: "image",
    type: "image/jpg"
  },
  { rel: "stylesheet", href: reset_default },
  { rel: "stylesheet", href: styles_default },
  { rel: "stylesheet", href: font_default },
  ...links4()
], meta = () => ({
  charset: "utf-8",
  title: "thomblweed",
  viewport: "width=device-width,initial-scale=1"
}), Document = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("html", { lang: "en", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("head", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react3.Links, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("body", { children: [
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 52,
      columnNumber: 49
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/root.tsx",
  lineNumber: 43,
  columnNumber: 3
}, this);
function Root() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(MainLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 61,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 60,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
var ErrorBoundary = () => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(MainLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: "Bad things have happened" }, void 0, !1, {
  fileName: "app/root.tsx",
  lineNumber: 70,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/root.tsx",
  lineNumber: 69,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/root.tsx",
  lineNumber: 68,
  columnNumber: 3
}, this);

// app/routes/api/blog/delete-blog.ts
var delete_blog_exports = {};
__export(delete_blog_exports, {
  action: () => action,
  loader: () => loader
});
var import_node2 = require("@remix-run/node");

// app/service/supabase/supabase.service.ts
var import_auth_helpers_remix = require("@supabase/auth-helpers-remix"), createSupabaseServerClient = (request, response) => (0, import_auth_helpers_remix.createServerClient)(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY,
  {
    request,
    response: response || new Response(),
    cookieOptions: {
      secure: !0,
      maxAge: 48e3,
      name: "thomblweed-auth-token"
    }
  }
), getRoleDataForCurrentUser = async (client) => {
  var _a;
  return (_a = (await client.from("user_profile").select("user_roles(role)").limit(1).single()).data) == null ? void 0 : _a.user_roles;
}, getAllBlogs = async (client) => (await client.from("blogs").select("*")).data;

// app/routes/api/blog/delete-blog.ts
var loader = () => (0, import_node2.json)({ message: "method not allow" }, 405), action = async ({ request }) => {
  if (request.method !== "POST")
    return (0, import_node2.json)({ message: "method not allow" }, 405);
  let id = (await request.formData()).get("id"), supabase = createSupabaseServerClient(request), { error } = await supabase.from("blogs").delete().match({ id });
  return error ? (console.error(error), (0, import_node2.json)({ message: "bad request" }, 400)) : (0, import_node2.json)({ message: "success" }, 200);
};

// app/routes/api/blog/add-blog.ts
var add_blog_exports = {};
__export(add_blog_exports, {
  action: () => action2,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node");
var loader2 = () => (0, import_node3.json)({ message: "method not allow" }, 405), action2 = async ({ request }) => {
  if (request.method !== "POST")
    return (0, import_node3.json)({ message: "method not allow" }, 405);
  let supabase = createSupabaseServerClient(request), { data, error: userError } = await supabase.auth.getUser();
  if (userError)
    return console.error(userError), (0, import_node3.json)({ message: "bad request" }, 400);
  let { id } = data.user, { error } = await supabase.from("blogs").insert({
    title: "new blog",
    created_on: new Date().toDateString(),
    created_by: id
  });
  return error ? (console.error(error), (0, import_node3.json)({ message: "bad request" }, 400)) : (0, import_node3.json)({ message: "success" }, 201);
};

// app/routes/__auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => Auth,
  loader: () => loader3
});
var import_react4 = require("@remix-run/react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => {
  var _a;
  let supabase = createSupabaseServerClient(request), { data } = await supabase.auth.getSession(), refresh_token = (_a = data == null ? void 0 : data.session) == null ? void 0 : _a.refresh_token;
  return refresh_token && await supabase.auth.refreshSession({
    refresh_token
  }), new Response();
};
function Auth() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
    fileName: "app/routes/__auth.tsx",
    lineNumber: 20,
    columnNumber: 10
  }, this);
}

// app/routes/__auth/__admin.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => Admin,
  links: () => links8,
  loader: () => loader4
});
var import_node4 = require("@remix-run/node"), import_react6 = require("@remix-run/react");

// app/layouts/Admin/index.tsx
var import_react5 = require("@remix-run/react");

// app/components/Elements/Button/button.css
var button_default = "/_static/build/_assets/button-4XV3Z2JM.css";

// app/components/Elements/Button/index.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), buttonType = {
  full: "button-width-full",
  normal: "button-width-normal",
  none: "button-width-none"
}, links6 = () => [
  { rel: "stylesheet", href: button_default }
], Button = ({ width = "normal", ...rest }) => {
  let buttonClasses = "button".concat(" ").concat(buttonType[width]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { className: buttonClasses, ...rest }, void 0, !1, {
    fileName: "app/components/Elements/Button/index.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};

// app/layouts/Admin/admin.css
var admin_default = "/_static/build/_assets/admin-ASZI2EJI.css";

// app/layouts/Admin/index.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), links7 = () => [
  { rel: "stylesheet", href: admin_default }
], AdminLayout = ({ children }) => {
  let { submit, state } = (0, import_react5.useFetcher)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "admin-container | container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      Button,
      {
        type: "button",
        disabled: state === "submitting" || state === "loading",
        onClick: () => {
          submit({}, { method: "post", action: "/api/blog/add-blog" });
        },
        children: "New +"
      },
      void 0,
      !1,
      {
        fileName: "app/layouts/Admin/index.tsx",
        lineNumber: 22,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/layouts/Admin/index.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, !0, {
    fileName: "app/layouts/Admin/index.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
};

// app/routes/__auth/__admin.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), links8 = () => [...links7()], loader4 = async ({ request }) => {
  let supabase = createSupabaseServerClient(request), roleData = await getRoleDataForCurrentUser(supabase);
  return (0, import_node4.json)({
    currentUserRole: (roleData == null ? void 0 : roleData.role) || "user"
  });
};
function Admin() {
  let { currentUserRole } = (0, import_react6.useLoaderData)(), isAdmin = currentUserRole === "admin";
  return isAdmin ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(AdminLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react6.Outlet, { context: { isAdmin } }, void 0, !1, {
    fileName: "app/routes/__auth/__admin.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/__auth/__admin.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react6.Outlet, { context: { isAdmin } }, void 0, !1, {
    fileName: "app/routes/__auth/__admin.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// app/routes/__auth/__admin/blog/$blogId.tsx
var blogId_exports = {};
__export(blogId_exports, {
  default: () => BlogItem
});
var import_react7 = require("@remix-run/react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function BlogItem() {
  let { blogId } = (0, import_react7.useParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: blogId }, void 0, !1, {
    fileName: "app/routes/__auth/__admin/blog/$blogId.tsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}

// app/routes/__auth/__admin/blog/index.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog,
  links: () => links11,
  loader: () => loader5
});
var import_node5 = require("@remix-run/node"), import_react9 = require("@remix-run/react");

// app/features/blog/components/admin/actions/DeleteBlog.tsx
var import_react8 = require("@remix-run/react");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), links9 = () => [...links6()], DeleteBlog = ({ id }) => {
  let { submit } = (0, import_react8.useFetcher)(), handleSubmit = (id2) => {
    let formData = new FormData();
    formData.set("id", id2.toString()), submit(formData, { method: "post", action: "/api/blog/delete-blog" });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Button, { type: "button", width: "none", onClick: () => handleSubmit(id), children: "\u2715" }, void 0, !1, {
    fileName: "app/features/blog/components/admin/actions/DeleteBlog.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
};

// app/features/blog/components/BlogInfo/blog-info.css
var blog_info_default = "/_static/build/_assets/blog-info-PUC3EMHV.css";

// app/features/blog/components/BlogInfo/index.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), links10 = () => [
  { rel: "stylesheet", href: blog_info_default },
  ...links9()
], BlogInfo = ({ isAdmin, id, title }) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("article", { className: "blog-info", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { children: title }, void 0, !1, {
    fileName: "app/features/blog/components/BlogInfo/index.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this),
  isAdmin ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(DeleteBlog, { id }, void 0, !1, {
    fileName: "app/features/blog/components/BlogInfo/index.tsx",
    lineNumber: 24,
    columnNumber: 18
  }, this) : null
] }, id, !0, {
  fileName: "app/features/blog/components/BlogInfo/index.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this);

// app/styles/routes/blog.css
var blog_default = "/_static/build/_assets/blog-NLABZX3Q.css";

// app/routes/__auth/__admin/blog/index.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), links11 = () => [
  { rel: "stylesheet", href: blog_default },
  ...links10()
], loader5 = async ({ request }) => {
  let supabase = createSupabaseServerClient(request), blogs = await getAllBlogs(supabase);
  return (0, import_node5.json)({
    blogs
  });
};
function Blog() {
  let { blogs } = (0, import_react9.useLoaderData)(), { isAdmin } = (0, import_react9.useOutletContext)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("section", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { children: "Blog" }, void 0, !1, {
      fileName: "app/routes/__auth/__admin/blog/index.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "blog-container", children: blogs == null ? void 0 : blogs.map(({ title, id }) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(BlogInfo, { isAdmin, id, title }, id, !1, {
      fileName: "app/routes/__auth/__admin/blog/index.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/__auth/__admin/blog/index.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__auth/__admin/blog/index.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Home
});
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function Home() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("section", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: "Hello! I'm a web developer and welcome to my site with nothing in it :-)" }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action3,
  default: () => Login,
  links: () => links17
});
var import_react11 = require("@remix-run/react");

// app/components/Section/section.css
var section_default = "/_static/build/_assets/section-DK2CQRL6.css";

// app/components/Section/index.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), links12 = () => [
  { rel: "stylesheet", href: section_default }
], Section = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("section", { className: "section", children }, void 0, !1, {
  fileName: "app/components/Section/index.tsx",
  lineNumber: 15,
  columnNumber: 3
}, this);

// app/components/Form/index.tsx
var import_react10 = require("@remix-run/react");

// app/components/Elements/Input/input.css
var input_default = "/_static/build/_assets/input-U4Y7UIR5.css";

// app/components/Elements/Input/index.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), links13 = () => [
  { rel: "stylesheet", href: input_default }
], Input = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("input", { className: "input", ...props }, void 0, !1, {
  fileName: "app/components/Elements/Input/index.tsx",
  lineNumber: 12,
  columnNumber: 19
}, this);

// app/components/Elements/Label/label.css
var label_default = "/_static/build/_assets/label-VPJLO55Q.css";

// app/components/Elements/Label/index.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), links14 = () => [
  { rel: "stylesheet", href: label_default }
], Label = ({
  text,
  ...rest
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { className: "label text-secondary", ...rest, children: text }, void 0, !1, {
  fileName: "app/components/Elements/Label/index.tsx",
  lineNumber: 18,
  columnNumber: 3
}, this);

// app/components/Form/Field/field.css
var field_default = "/_static/build/_assets/field-6GT6EU5K.css";

// app/components/Form/Field/index.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), links15 = () => [
  { rel: "stylesheet", href: field_default },
  ...links14(),
  ...links13()
], Field = ({
  name,
  label,
  type,
  disabled,
  required
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "field", id: name, role: "group", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Label, { text: label, htmlFor: name }, void 0, !1, {
    fileName: "app/components/Form/Field/index.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    Input,
    {
      "aria-label": `${label}`,
      type,
      name,
      disabled,
      required
    },
    void 0,
    !1,
    {
      fileName: "app/components/Form/Field/index.tsx",
      lineNumber: 31,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/Form/Field/index.tsx",
  lineNumber: 29,
  columnNumber: 3
}, this);

// app/components/Form/index.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), links16 = () => [...links15(), ...links6()], Form = ({
  schema,
  busy = !1,
  method,
  action: action4,
  error,
  ...rest
}) => {
  var _a, _b;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react10.Form, { method, action: action4, ...rest, children: [
    (_a = schema.fields) == null ? void 0 : _a.map((field) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      Field,
      {
        name: field.name,
        label: field.label,
        type: field.type,
        disabled: busy,
        required: field.required
      },
      field.name,
      !1,
      {
        fileName: "app/components/Form/index.tsx",
        lineNumber: 31,
        columnNumber: 7
      },
      this
    )),
    (_b = schema.buttons) == null ? void 0 : _b.map(({ id, type, label }) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Button, { disabled: busy, type, width: "full", children: label }, id, !1, {
      fileName: "app/components/Form/index.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)),
    error ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: error }, void 0, !1, {
      fileName: "app/components/Form/index.tsx",
      lineNumber: 45,
      columnNumber: 14
    }, this) : null
  ] }, void 0, !0, {
    fileName: "app/components/Form/index.tsx",
    lineNumber: 29,
    columnNumber: 3
  }, this);
};

// app/styles/routes/login.css
var login_default = "/_static/build/_assets/login-MGGCVTZA.css";

// app/handlers/login.ts
var import_node6 = require("@remix-run/node");

// app/utils/index.ts
var getFormValuesFromRequest = async (request, formNames) => {
  let data = await request.formData();
  return formNames.map((value) => data.get(value));
};

// app/handlers/login.ts
var loginHandler = async (request) => {
  let [email, password] = await getFormValuesFromRequest(request, [
    "email" /* EMAIL */,
    "password" /* PASSWORD */
  ]);
  if (email == null || password == null)
    return (0, import_node6.json)({ loginError: "email and/or password must be provided" });
  let response = new Response(), supabase = createSupabaseServerClient(request, response), { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  return error ? (console.error(error), (0, import_node6.json)(
    {
      loginError: "An error occured when logging in"
    },
    {
      headers: response.headers
    }
  )) : (0, import_node6.redirect)("/", {
    headers: response.headers
  });
};

// app/routes/login.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), links17 = () => [
  { rel: "stylesheet", href: login_default },
  ...links12(),
  ...links16()
], action3 = async ({ request }) => loginHandler(request);
function Login() {
  let { state } = (0, import_react11.useTransition)(), actionData = (0, import_react11.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Section, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h2", { children: "Admin Login" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "formContainer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      Form,
      {
        method: "post",
        schema: {
          fields: [
            {
              type: "email" /* EMAIL */,
              name: "email" /* EMAIL */,
              label: "Email Address",
              required: !0
            },
            {
              type: "password" /* PASSWORD */,
              name: "password" /* PASSWORD */,
              label: "Password",
              required: !0
            }
          ],
          buttons: [
            {
              label: "Login",
              type: "submit" /* SUBMIT */,
              id: "login-button"
            }
          ]
        },
        busy: state === "submitting" || state === "loading",
        error: actionData == null ? void 0 : actionData.loginError
      },
      void 0,
      !1,
      {
        fileName: "app/routes/login.tsx",
        lineNumber: 31,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
var ErrorBoundary2 = ({ error }) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: error.message }, void 0, !1, {
  fileName: "app/routes/login.tsx",
  lineNumber: 68,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/routes/login.tsx",
  lineNumber: 66,
  columnNumber: 3
}, this);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "d9fa95f1", entry: { module: "/_static/build/entry.client-WOLVLB3L.js", imports: ["/_static/build/_shared/chunk-QCZKAWD5.js", "/_static/build/_shared/chunk-BPN5PYI3.js", "/_static/build/_shared/chunk-HRTTMHIP.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/_static/build/root-4XURQJIH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/__auth": { id: "routes/__auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/_static/build/routes/__auth-JP532K7O.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/__admin": { id: "routes/__auth/__admin", parentId: "routes/__auth", path: void 0, index: void 0, caseSensitive: void 0, module: "/_static/build/routes/__auth/__admin-PF7ZAEUQ.js", imports: ["/_static/build/_shared/chunk-JJPWXARO.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/__admin/blog/$blogId": { id: "routes/__auth/__admin/blog/$blogId", parentId: "routes/__auth/__admin", path: "blog/:blogId", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/__auth/__admin/blog/$blogId-PY33W7PZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/__admin/blog/index": { id: "routes/__auth/__admin/blog/index", parentId: "routes/__auth/__admin", path: "blog", index: !0, caseSensitive: void 0, module: "/_static/build/routes/__auth/__admin/blog/index-QX6HBJDB.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/blog/add-blog": { id: "routes/api/blog/add-blog", parentId: "root", path: "api/blog/add-blog", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/api/blog/add-blog-B5OLYX3K.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/blog/delete-blog": { id: "routes/api/blog/delete-blog", parentId: "root", path: "api/blog/delete-blog", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/api/blog/delete-blog-SRDYPBAG.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/_static/build/routes/index-6REIX6QT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/login-DKPXOWBX.js", imports: ["/_static/build/_shared/chunk-JJPWXARO.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 } }, cssBundleHref: void 0, hmr: void 0, url: "/_static/build/manifest-D9FA95F1.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/_static/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/api/blog/delete-blog": {
    id: "routes/api/blog/delete-blog",
    parentId: "root",
    path: "api/blog/delete-blog",
    index: void 0,
    caseSensitive: void 0,
    module: delete_blog_exports
  },
  "routes/api/blog/add-blog": {
    id: "routes/api/blog/add-blog",
    parentId: "root",
    path: "api/blog/add-blog",
    index: void 0,
    caseSensitive: void 0,
    module: add_blog_exports
  },
  "routes/__auth": {
    id: "routes/__auth",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/__auth/__admin": {
    id: "routes/__auth/__admin",
    parentId: "routes/__auth",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/__auth/__admin/blog/$blogId": {
    id: "routes/__auth/__admin/blog/$blogId",
    parentId: "routes/__auth/__admin",
    path: "blog/:blogId",
    index: void 0,
    caseSensitive: void 0,
    module: blogId_exports
  },
  "routes/__auth/__admin/blog/index": {
    id: "routes/__auth/__admin/blog/index",
    parentId: "routes/__auth/__admin",
    path: "blog",
    index: !0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};

// server.ts
var handler = (0, import_architect.createRequestHandler)({
  build: server_build_exports,
  mode: "development"
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=index.js.map
