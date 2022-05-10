using Microsoft.EntityFrameworkCore;
using WhatsAppRating.Models;

namespace WhatsAppRating.Data
{
    public class RatingsContext : DbContext
    {
        private const string connectionString = "server=localhost;port=3306;database=WhatsAppDataBase;user=root;password=Osh841998";

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql(connectionString, MariaDbServerVersion.AutoDetect(connectionString));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configuring the Name property as the primary
            // key of the Items table
            modelBuilder.Entity<Rating>().HasKey(e => e.Id);
        }

        public DbSet<Rating> Ratings { get; set; }
    }
}
