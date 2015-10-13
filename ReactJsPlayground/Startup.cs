using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ReactJsPlayground.Startup))]
namespace ReactJsPlayground
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {

        }
    }
}
