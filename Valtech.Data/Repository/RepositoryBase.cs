using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Valtech.Data.Context;
using Valtech.Domain.Interfaces.Repository;
using System.Data.Entity.Migrations;
using System.Reflection;

namespace Valtech.Data.Repository
{
    public class RepositoryBase<TEntity> : IDisposable, IRepositoryBase<TEntity> where TEntity : class
    {
        protected ApplicationContext _context { get; set; }

        public RepositoryBase()
        {
            _context = new ApplicationContext();
        }
        //private static ILoggerAdapter _logger;

        public DbEntityEntry<TEntity> EnsureAttachedEF(TEntity entity)
        {
            var e = _context.Entry(entity);
            if (e.State == EntityState.Detached)
            {
                _context.Set<TEntity>().Attach(entity);
                e = _context.Entry(entity);
            }

            return e;
        }

        public void Dispose()
        {
            if (_context != null)
            {
                _context.Dispose();
            }
        }

        public TEntity Add(TEntity obj)
        {
            TrySetProperty(obj, "Id", Guid.NewGuid().ToString());
            _context.Set<TEntity>().Add(obj);
            _context.SaveChanges();
            return obj;
        }

        public TEntity GetById(string id)
        {
            return _context.Set<TEntity>().Find(id);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return _context.Set<TEntity>().ToList();
        }

        public TEntity Update(TEntity obj)
        {
            _context.Set<TEntity>().AddOrUpdate(obj);
            _context.SaveChanges();
            return obj;
        }

        public void Remove(TEntity obj)
        {
            _context.Set<TEntity>().Remove(obj);
            _context.SaveChanges();
        }


        public void RemoveById(string id)
        {
            TEntity obj = _context.Set<TEntity>().Find(id);
            _context.Set<TEntity>().Remove(obj);
            _context.SaveChanges();
        }

        public void ReloadContext()
        {
            _context = new ApplicationContext();
        }

        public void RemoveAll()
        {
            List<TEntity> TEntities = GetAll().ToList();
            RemoveAll(TEntities);
        }

        public void AddAll(List<TEntity> TEntities)
        {
            _context.Set<TEntity>().AddRange(TEntities);
            _context.SaveChanges();
        }

        public void RemoveAll(List<TEntity> TEntities)
        {
            _context.Set<TEntity>().RemoveRange(TEntities);
            _context.SaveChanges();
        }

        private void TrySetProperty(object obj, string property, object value)
        {
            var prop = obj.GetType().GetProperty(property, BindingFlags.Public | BindingFlags.Instance);
            if (prop != null && prop.CanWrite)
                prop.SetValue(obj, value, null);
        }
    }
}
