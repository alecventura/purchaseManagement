using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Valtech.Domain.Interfaces.Repository
{
    public interface IRepositoryBase<TEntity> where TEntity : class
    {
        TEntity Add(TEntity obj);
        TEntity GetById(string id);
        IEnumerable<TEntity> GetAll();
        TEntity Update(TEntity obj);
        void Remove(TEntity obj);
        void Dispose();
        void RemoveById(string id);
        void ReloadContext();
        void RemoveAll();
        void RemoveAll(List<TEntity> TEntities);
        void AddAll(List<TEntity> TEntities);
    }
}
