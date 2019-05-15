using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication3.Models;

namespace WebApplication3.Data
{
    public class StreamRepository: IStreamRepository
    {
        private readonly DataContext _context;

        public StreamRepository(DataContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var user = await _context.Users.Include(p => p.Photos).ToListAsync();
            return user;
        }

        public async Task<User> GetUser(int id)
        {
            var user =await _context.Users.Include(p => p.Photos).FirstOrDefaultAsync(u => u.Id == id);

            return user;
        }

        public async Task<Message> GetMessage(int id)
        {
            return await _context.Messages.FirstOrDefaultAsync(m => m.Id == id);
        }

        public Task<IEnumerable<Message>> GetMessageThread(int userId, int recipientId)
        {
            throw new NotImplementedException();
        }
    }
}
