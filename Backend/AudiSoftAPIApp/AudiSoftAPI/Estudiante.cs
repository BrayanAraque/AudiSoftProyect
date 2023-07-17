using System.ComponentModel.DataAnnotations;

namespace AudiSoftAPI
{
    public class Estudiante
    {
        public int Id { get; set; }

        [StringLength(20)]
        public string EstudianteName { get; set; } = string.Empty;
    }
}
