﻿using AutoMapper;
using Valtech.Application.ViewModels.PurchaseModule;
using Valtech.Domain.Entities.PurchaseModule;

namespace Valtech.Application.AutoMapper
{
    public class ModelToDomainMapping : Profile
    {
        public ModelToDomainMapping()
        {
            CreateMap<PaymentMethodViewModel, PaymentMethod>();
            CreateMap<ProductCategoryViewModel, ProductCategory>();
            CreateMap<ProductViewModel, Product>();
            CreateMap<ProductOrderViewModel, ProductOrder>()
                .ForMember(dest => dest.Quantity, opts => opts.MapFrom(src => src.TotalQuantity));            
        }
    }
}
