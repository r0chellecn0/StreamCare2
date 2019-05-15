using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication3.Models
{
    public class Message
    {
        public int Id { get; set; }
        public int SenderId { get; set; }
        public User Sender { get; set; }
        public int  RecipientId { get; set; }
        public User Recipient { get; set; }
        public string Conent { get; set; }
        public bool IsRead { get; set; }
        public DateTime? DateRead { get; set; }
        public DateTime MessageSent { get; set; }
        public bool SenderDeleted { get; set; }
        public bool RecipientDeleted { get; set; }
    }
}
