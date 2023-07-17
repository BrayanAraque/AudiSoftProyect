using Microsoft.EntityFrameworkCore;

namespace AudiSoftAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Nota> Notas { get; set; }

        public DbSet<Profesor> Profesores { get; set; }

        public DbSet<Estudiante> Estudiantes { get; set; }

        public DbSet<Status> Statuses { get; set; }
    }
}
