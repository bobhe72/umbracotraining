[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(UmbracoDemo.Start.App_Start.NinjectWebCommon), "Start")]
[assembly: WebActivatorEx.ApplicationShutdownMethod(typeof(UmbracoDemo.Start.App_Start.NinjectWebCommon), "Stop")]

namespace UmbracoDemo.Start.App_Start
{
    using System;
    using System.Web;

    using Ninject;
    using Ninject.Web.Common;
    using Microsoft.Web.Infrastructure.DynamicModuleHelper;

    using Umbraco.Web;
    using Umbraco.Web.Security;
    using Umbraco.Core.Logging;
    using Umbraco.Core.Services;

    using UmbracoDemo.Core.Interfaces;
    using UmbracoDemo.Core.Services;
    using UmbracoDemo.Core.Controllers.Xtensions;

    public static class NinjectWebCommon
    {
        private static readonly Bootstrapper bootstrapper = new Bootstrapper();

        /// <summary>
        /// Starts the application
        /// </summary>
        public static void Start()
        {
            DynamicModuleUtility.RegisterModule(typeof(OnePerRequestHttpModule));
            DynamicModuleUtility.RegisterModule(typeof(NinjectHttpModule));
            bootstrapper.Initialize(CreateKernel);
        }

        /// <summary>
        /// Stops the application.
        /// </summary>
        public static void Stop()
        {
            bootstrapper.ShutDown();
        }

        private static IKernel CreateKernel()
        {
            var kernel = new StandardKernel();
            try
            {
                kernel.Settings.AllowNullInjection = true;
                kernel.Bind<Func<IKernel>>().ToMethod(ctx => () => new Bootstrapper().Kernel);
                kernel.Bind<IHttpModule>().To<HttpApplicationInitializationHttpModule>();

                RegisterServices(kernel);
                return kernel;
            }
            catch
            {
                kernel.Dispose();
                throw;
            }
        }

        /// <summary>
        /// Load your modules or register your services here!
        /// </summary>
        /// <param name="kernel">The kernel.</param>
        private static void RegisterServices(IKernel kernel)
        {
            //umbraco core services
            kernel.Bind<UmbracoContext>().ToMethod((context) => UmbracoContext.Current).InRequestScope();
            kernel.Bind<ILogger>().ToMethod((context) => UmbracoContext.Current.Application.ProfilingLogger.Logger);
            kernel.Bind<IMemberService>().ToMethod((context) => UmbracoContext.Current.Application.Services.MemberService).InRequestScope();
            kernel.Bind<UmbracoHelper>().To<UmbracoHelper>().InRequestScope();
            kernel.Bind<MembershipHelper>().To<MembershipHelper>().InRequestScope();

            //umbraco services
            kernel.Bind<ISiteLayoutServices>().To<SiteLayoutServices>().InRequestScope();

            //controller services
            kernel.Bind<IGlobalSurfaceServices>().To<GlobalSurfaceServices>().InRequestScope();
        }

    }
}
