using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Valtech.Domain.Interfaces.Services
{
    public interface IServiceBase<TEntity> where TEntity : class
    {
        TEntity Add(TEntity obj);
        TEntity GetById(string id);
        IEnumerable<TEntity> GetAll();
        TEntity Update(TEntity obj);
        void Remove(TEntity obj);
        void RemoveById(string id);
        void Dispose();
    }
}
