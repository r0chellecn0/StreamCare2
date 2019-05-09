using System;

namespace WebApplication3.Models
{
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Caption { get; set; }
        public DateTime DateAdded{ get; set; }
        public bool IsMain { get; set; }
    }
}