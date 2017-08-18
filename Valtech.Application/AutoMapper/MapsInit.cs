using AutoMapper;
using Valtech.Application.AutoMapper;

[assembly: WebActivatorEx.PostApplicationStartMethod(typeof(MapsInit), "Activate")]
namespace Valtech.Application.AutoMapper
{
    public static class MapsInit
    {
        public static void Activate()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.AddProfile<DomainToModelMapping>();
                cfg.AddProfile<ModelToDomainMapping>();
            });
        }
    }
}
