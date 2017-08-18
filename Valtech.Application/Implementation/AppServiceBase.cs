using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Valtech.Application.Interface;
using Valtech.Domain.Interfaces.Services;

namespace Valtech.Application.Implementation
{
    public class AppServiceBase<TEntity> : IDisposable, IAppServiceBase<TEntity> where TEntity : class
    {
        private readonly IServiceBase<TEntity> _service;

        public AppServiceBase(IServiceBase<TEntity> service)
        {
            _service = service;
        }
        public void Add(TEntity obj)
        {
            _service.Add(obj);
        }

        public TEntity GetById(string id)
        {
            return _service.GetById(id);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return _service.GetAll();
        }

        public void Update(TEntity obj)
        {
            _service.Update(obj);
        }

        public void Remove(TEntity obj)
        {
            _service.Remove(obj);
        }

        public void Dispose()
        {
            _service.Dispose();
        }
    }
}
