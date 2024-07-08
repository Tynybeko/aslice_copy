import VueRouter from "vue-router";
import { dashboardVerifyRedirectMiddleware } from "./middleware/dashboardVerifyRedirect.middleware";
// import { messagesMiddleware } from "./middleware/messages.middleware";
import { getUserData } from "./middleware/getUserData.middleware";
import { getGroupDataMiddleware } from "@/router/middleware/getGroupData.middleware";
import { incompleteRegistrationMiddleware } from "@/router/middleware/incompleteRegistration.middleware";
import {
  isAuthMiddleware,
  notAuthorized,
  redirectionMainErrorGuard,
  alreadyAuthMiddleware
} from "@/router/middleware/redirectToDashboard.middleware";
import store from "@/store";
import Vue from "vue";
import { middlewarePipeline } from "@/utils/middlewarePipeline";
import {
  getPlaylistDataMiddleware,
  playlistDataGuard
} from "@/router/middleware/getPlaylistData.middleware";
import { loadAccountingDataMiddleware } from "@/router/middleware/loadAccountingData.middleware";
import { tracksDataLoaderMiddleware } from "@/router/middleware/tracksDataLoader.middleware";
import { getSocieties } from "@/router/middleware/user";
import { getTrackDataMiddleware } from "./middleware/getTrackInfo.middleware";
import { loginAsUserMiddleware } from "@/router/middleware/loginAsUser.middleware";

const PreferencesRoutes = [
  {
    path: "/online-dashboard/preferences/profile",
    name: "Profile",
    isAuthorized: true,
    component: () => import("../views/OnlineDashboard/settings-pages/Profile"),
    meta: {
      layout: "OnlineDashboardLayout",
      middleware: [
        isAuthMiddleware,
        incompleteRegistrationMiddleware,
        getUserData
      ]
    }
  },
  {
    path: "/online-dashboard/preferences/online-presence",
    name: "Online Presence",
    isAuthorized: true,
    component: () =>
      import("../views/OnlineDashboard/settings-pages/OnlinePresence"),
    meta: {
      layout: "OnlineDashboardLayout",
      middleware: [
        isAuthMiddleware,
        incompleteRegistrationMiddleware,
        getUserData
      ]
    }
  },
  {
    path: "/online-dashboard/preferences/genres",
    name: "Genres",
    isAuthorized: true,
    component: () => import("../views/OnlineDashboard/settings-pages/Genres"),
    meta: {
      layout: "OnlineDashboardLayout",
      middleware: [
        isAuthMiddleware,
        incompleteRegistrationMiddleware,
        getUserData
      ]
    }
  },
  {
    path: "/online-dashboard/preferences/playlist-options",
    name: "Display",
    isAuthorized: true,
    component: () =>
      import("../views/OnlineDashboard/settings-pages/PlaylistOptions"),
    meta: {
      layout: "OnlineDashboardLayout",
      middleware: [
        isAuthMiddleware,
        incompleteRegistrationMiddleware,
        getUserData
      ]
    }
  },
  {
    path: "/online-dashboard/preferences/collection-pro",
    name: "Collection/PRO",
    isAuthorized: true,
    component: () =>
      import("../views/OnlineDashboard/settings-pages/CollectionPRO"),
    meta: {
      layout: "OnlineDashboardLayout",
      middleware: [
        isAuthMiddleware,
        incompleteRegistrationMiddleware,
        getUserData,
        getSocieties
      ]
    }
  },
  {
    path: "/online-dashboard/preferences/payments",
    name: "Payments",
    isAuthorized: true,
    component: () => import("../views/OnlineDashboard/settings-pages/Payments"),
    meta: {
      layout: "OnlineDashboardLayout",
      middleware: [
        isAuthMiddleware,
        incompleteRegistrationMiddleware,
        getUserData
      ]
    }
  },
  {
    path: "/online-dashboard/preferences/email",
    name: "Email/Contact",
    isAuthorized: true,
    component: () =>
      import("../views/OnlineDashboard/settings-pages/EmailContactSelections"),
    meta: {
      layout: "OnlineDashboardLayout",
      middleware: [
        isAuthMiddleware,
        incompleteRegistrationMiddleware,
        getUserData
      ]
    }
  }
];
const OnlineDashboardRoutes = [
  {
    path: "/online-dashboard/overview",
    name: "Overview",
    isAuthorized: true,
    meta: {
      layout: "OnlineDashboardLayout",
      middleware: [isAuthMiddleware, incompleteRegistrationMiddleware]
    },
    component: () => import("../views/OnlineDashboard/Overview")
  },
  {
    path: "/online-dashboard/overview/:type",
    name: "OverviewType",
    isAuthorized: true,
    meta: {
      layout: "OnlineDashboardLayout",
      middleware: [isAuthMiddleware, incompleteRegistrationMiddleware]
    },
    component: () => import("../views/OnlineDashboard/Overview")
  },
  {
    path: "/online-dashboard/playlists",
    name: "Playlists",
    isAuthorized: true,
    meta: {
      layout: "OnlineDashboardLayout",
      middleware: [isAuthMiddleware, incompleteRegistrationMiddleware]
    },
    component: () => import("../views/OnlineDashboard/Playlist")
  },
  {
    path: "/online-dashboard/playlist-sharing",
    name: "Playlist Sharing",
    redirect: {
      name: "Playlist Sharing Preview"
    },
    meta: {
      layout: "OnlineDashboardLayout",
      middleware: [isAuthMiddleware, incompleteRegistrationMiddleware]
    },
    component: () => import("../views/OnlineDashboard/PlaylistSharing"),
    children: [
      {
        path: "/online-dashboard/playlist-sharing/preview/:id",
        name: "Playlist Sharing Preview",
        meta: {
          layout: "OnlineDashboardLayout",
          middleware: [
            isAuthMiddleware,
            incompleteRegistrationMiddleware,
            getPlaylistDataMiddleware,
            playlistDataGuard
          ]
        },
        component: () =>
          import("@/views/OnlineDashboard/PlaylistSharingPreview")
      },
      {
        path: "/online-dashboard/playlist-sharing/track-list/:id",
        name: "Playlist Sharing List",
        meta: {
          layout: "OnlineDashboardLayout",
          middleware: [
            isAuthMiddleware,
            incompleteRegistrationMiddleware,
            getPlaylistDataMiddleware,
            playlistDataGuard
          ]
        },
        component: () =>
          import("@/views/OnlineDashboard/PlaylistSharingTrackList")
      }
    ]
  },
  {
    path: "/online-dashboard/tracks",
    name: "Tracks",
    isAuthorized: true,
    meta: {
      layout: "OnlineDashboardLayout",
      middleware: [
        isAuthMiddleware,
        incompleteRegistrationMiddleware,
        tracksDataLoaderMiddleware
      ]
    },
    component: () => import("@/views/OnlineDashboard/Tracks")
  },
  {
    path: "/online-dashboard/track-sharing",
    name: "Track Sharing",
    redirect: {
      name: "Track Sharing Preview"
    },
    meta: {
      layout: "OnlineDashboardLayout",
      middleware: [isAuthMiddleware, incompleteRegistrationMiddleware]
    },
    component: () => import("@/views/OnlineDashboard/TrackSharing"),
    children: [
      {
        path: "/online-dashboard/track-sharing/preview/:id",
        name: "Track Sharing Preview",
        meta: {
          layout: "OnlineDashboardLayout",
          middleware: [
            isAuthMiddleware,
            incompleteRegistrationMiddleware,
            getTrackDataMiddleware
          ]
        },
        component: () => import("@/views/OnlineDashboard/TrackSharingPreview")
      }
    ]
  },
  {
    path: "/online-dashboard/feature-track-sharing/preview",
    name: "Feature Track Sharing Preview",
    isAuthorized: true,
    meta: {
      layout: "OnlineDashboardLayout",
      middleware: [
        isAuthMiddleware,
        incompleteRegistrationMiddleware,
        tracksDataLoaderMiddleware
      ]
    },
    component: () =>
      import("@/views/OnlineDashboard/FeatureTrackSharingPreview")
  },
  {
    path: "/online-dashboard/track/:id",
    name: "Track",
    isAuthorized: true,
    meta: {
      layout: "OnlineDashboardLayout",
      middleware: [isAuthMiddleware, incompleteRegistrationMiddleware]
    },
    component: () => import("../views/OnlineDashboard/TrackView")
  },
  {
    path: "/online-dashboard/accounting",
    alias: "/online-dashboard/reports",
    name: "Accounting",
    isAuthorized: true,
    meta: {
      layout: "OnlineDashboardLayout",
      middleware: [
        isAuthMiddleware,
        incompleteRegistrationMiddleware,
        loadAccountingDataMiddleware
      ]
    },
    component: () => import("../views/OnlineDashboard/Accounting")
  },
  // TODO: Uncomment when it will be finished
  // {
  //   path: "/online-dashboard/messages",
  //   name: "Messages",
  //   isAuthorized: true,
  //   meta: {
  //     layout: "OnlineDashboardLayout",
  //     middleware: [
  //       isAuthMiddleware,
  //       incompleteRegistrationMiddleware,
  //       messagesMiddleware
  //     ]
  //   },
  //   component: () => import("../views/OnlineDashboard/Messages")
  // },
  {
    path: "/online-dashboard/preferences",
    name: "Preferences",
    isAuthorized: true,
    redirect: {
      name: "Profile"
    },
    component: () => import("../views/OnlineDashboard/Settings"),
    meta: {
      layout: "OnlineDashboardLayout",
      middleware: [
        isAuthMiddleware,
        incompleteRegistrationMiddleware,
        getUserData
      ]
    },
    children: PreferencesRoutes
  },
  {
    path: "/online-dashboard/groups/:id?",
    name: "Groups",
    isAuthorized: true,
    component: () => import("../views/OnlineDashboard/GroupForm"),
    meta: {
      layout: "OnlineDashboardLayout",
      middleware: [
        isAuthMiddleware,
        incompleteRegistrationMiddleware,
        getGroupDataMiddleware
      ]
    }
  },
  {
    path: "/online-dashboard/groups/:id/dispute",
    name: "GroupDispute",
    isAuthorized: true,
    component: () => import("../views/OnlineDashboard/GroupDispute"),
    meta: {
      layout: "OnlineDashboardLayout",
      middleware: [
        isAuthMiddleware,
        incompleteRegistrationMiddleware,
        getGroupDataMiddleware
      ]
    }
  }
];
const Routes = [
  {
    path: "/",
    name: "Main",
    displayNone: true,
    component: () => import("@/views/Main.vue"),
    meta: {
      meta: "AppInfoLayout",
      middleware: [dashboardVerifyRedirectMiddleware, alreadyAuthMiddleware]
    }
  },
  {
    path: "/page-is-under-construction",
    name: "page-is-under-construction",
    displayNone: true,
    component: () => import("@/views/PageUnderConstruction.vue"),
    meta: {
      layout: "AppRegularLayout"
    }
  },
  {
    path: "/signup/success",
    name: "AuthSignupSuccess",
    displayNone: true,
    component: () => import("@/views/auth/SuccessMessage.vue"),
    meta: {
      layout: "AppDefaultLayout"
    }
  },
  {
    path: "/signup/:id",
    name: "AuthSignup",
    displayNone: true,
    component: () => import("@/views/auth/Signup.vue"),
    meta: {
      layout: "AppDefaultLayout"
    }
  },
  {
    path: "/login-as-user",
    name: "LoginAsUser",
    meta: {
      middleware: [loginAsUserMiddleware]
    }
  },
  {
    path: "/auth/login",
    name: "Login",
    isAuthorized: false,
    component: () => import("../views/auth/Login.vue"),
    meta: {
      layout: "AppDefaultLayout"
    }
  },
  {
    path: "/auth/verification",
    name: "AuthVerification",
    displayNone: true,
    component: () => import("@/views/auth/Verification.vue"),
    meta: {
      layout: "AppDefaultLayout"
    }
  },
  {
    path: "/auth/verify-process",
    name: "AuthVerifyProcess",
    displayNone: true,
    component: () => import("@/views/auth/VerifyProcess.vue"),
    meta: {
      middleware: [notAuthorized],
      layout: "AppDefaultLayout"
    }
  },
  {
    path: "/users/stripe/return",
    name: "verify-status",
    isAuthorized: false,
    component: () => import("../views/FromStripePage.vue"),
    meta: {
      layout: "AppDefaultLayout"
    }
  },
  {
    path: "/users/identification",
    name: "identify-status",
    isAuthorized: false,
    component: () => import("../views/Identification.vue"),
    meta: {
      layout: "AppDefaultLayout"
    }
  },
  {
    path: "/users/verify-email",
    name: "EmailVerification",
    displayNone: true,
    component: () => import("../views/auth/Verification.vue"),
    meta: {
      layout: "AppDefaultLayout"
    }
  },
  {
    path: "/producer",
    name: "Producver View",
    isAuthorized: true,
    component: () => import("../views/ProducerView.vue"),
    meta: {
      layout: "AppRegularLayout"
    }
  },
  {
    path: "/register-step3",
    name: "Step 3",
    component: () => import("../views/RegisterStep3"),
    meta: {
      layout: "AppDefaultLayout"
    }
  },
  {
    path: "/download",
    name: "Download",
    isAuthorized: true,
    component: () => import("../views/Download.vue"),
    meta: {
      layout: "AppRegularLayout"
    }
  },
  {
    path: "/register-confirm",
    name: "Confirm",
    isAuthorized: false,
    displayNone: true,
    component: () => import("../components/RegisterConfirm.vue"),
    meta: {
      layout: "AppRegularLayout"
    }
  },
  {
    path: "/register-success",
    name: "Confirmed",
    isAuthorized: false,
    displayNone: true,
    component: () => import("../components/RegisterSuccess.vue"),
    meta: {
      layout: "AppDefaultLayout"
    }
  },
  {
    path: "/online-dashboard",
    name: "Dashboard",
    isAuthorized: true,
    navFooter: true,
    redirect: { name: "Overview" },
    meta: {
      layout: "OnlineDashboardLayout",
      middleware: [isAuthMiddleware, incompleteRegistrationMiddleware]
    },
    component: () => import("../views/OnlineDashboard/OnlineDashboard"),
    children: OnlineDashboardRoutes
  },
  {
    path: "/users/change-email",
    name: "ChangeEmail",
    displayNone: true,
    component: () => import("../views/ChangeEmail"),
    meta: {
      layout: "AppRegularLayout"
    }
  },
  {
    path: "/about",
    name: "About Us",
    displayNone: true,
    navFooter: true,
    component: () => import("../views/AboutUs.vue"),
    meta: {
      layout: "AppInfoLayout"
    }
  },
  {
    path: "/faq",
    name: "FAQ",
    navFooter: true,
    component: () => import("../views/newFAQ.vue"),
    meta: {
      layout: "AppInfoLayout"
    }
  },
  {
    path: "/tutorials",
    name: "Tutorials",
    // navFooter: true,
    component: () => import("../views/Tutorials.vue"),
    meta: {
      layout: "AppRegularLayout"
    }
  },
  {
    path: "/aslicepresentation",
    name: "Aslice Presentation",
    navFooter: true,
    component: () => import("../views/Presentation.vue")
  },
  {
    path: "/resources",
    name: "Resources",
    navFooter: true,
    component: () => import("../views/resources/Resources.vue"),
    meta: {
      layout: "AppRegularNewFooterLayout"
    }
  },
  {
    path: "/resources/:id",
    name: "Post",
    component: () => import("../views/resources/Post.vue"),
    meta: {
      layout: "AppRegularNewFooterLayout"
    }
  },
  {
    path: "/contact",
    name: "Contact",
    navFooter: true,
    component: () => import("../views/ContactUs.vue"),
    meta: {
      layout: "AppInfoLayout"
    }
  },
  {
    path: "/theaslicefoundation",
    name: "The Aslice Foundation",
    displayNone: true,
    navFooter: true,
    component: () => import("../views/Foundation.vue"),
    meta: {
      layout: "AppInfoLayout"
    }
  },
  {
    path: "/terms",
    name: "Terms",
    navFooter: true,
    component: () => import("../views/Terms.vue"),
    meta: {
      layout: "AppInfoLayout"
    }
  },
  {
    path: "/privacy",
    name: "Privacy",
    navFooter: true,
    component: () => import("../views/Privacy.vue"),
    meta: {
      layout: "AppInfoLayout"
    }
  },
  {
    path: "/software-download",
    name: "Software Download",
    isAuthorized: true,
    navFooter: false,
    displayNone: true,
    component: () => import("../views/SoftwareDownload.vue"),
    meta: {
      layout: "AppRegularLayout"
    }
  },
  {
    path: "/copyrightexplained",
    name: "CopyRight",
    isAuthorized: false,
    navFooter: false,
    displayNone: true,
    component: () => import("../views/Copyright.vue"),
    meta: {
      layout: "AppDefaultLayout"
    }
  },
  {
    path: "/supportthesound",
    name: "SupportSound",
    isAuthorized: false,
    navFooter: false,
    displayNone: true,
    component: () => import("../views/SupportSound.vue"),
    meta: {
      layout: "AppDefaultLayout"
    }
  },
  {
    path: "/",
    name: "Logout",
    id: "logout-btn",
    logout: true,
    isAuthorized: true,
    navFooter: false,
    meta: {
      layout: "AppRegularLayout"
    }
  },
  {
    path: "/server-error",
    name: "ServerError",
    displayNone: true,
    component: () => import("../views/ServerError"),
    meta: {
      layout: "AppRegularLayout",
      middleware: [redirectionMainErrorGuard]
    }
  },
  {
    path: "*",
    displayNone: true,
    component: () => import("../views/NotFound"),
    meta: {
      layout: "AppInfoLayout",
      middleware: [redirectionMainErrorGuard]
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: Routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
        // , offset: { x: 0, y: 10 }
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }

  if (to.meta.title) {
    document.title = to.meta.title; // Set the page title
  }
  // Set the meta tags
  if (to.meta.metaTags) {
    to.meta.metaTags.forEach(tag => {
      const metaTag = document.createElement("meta");
      Object.keys(tag).forEach(key => {
        metaTag.setAttribute(key, tag[key]);
      });
      document.head.appendChild(metaTag);
    });
  }

  const middleware = to.meta.middleware;
  const context = {
    store,
    router,
    resources: Vue.prototype.$aslice,
    to,
    from,
    next
  };

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  });
});

export default router;
export { Routes, PreferencesRoutes, OnlineDashboardRoutes };
