using System.ComponentModel.DataAnnotations;

namespace AudiSoftAPI
{
    public class Nota
    {
        public int Id { get; set; }

        [StringLength(20)]
        public string NotaName { get; set; } = string.Empty;

        [StringLength(20)]
        public string Status { get; set; } = string.Empty;

        public int ProfesorId { get; set; }

        public Profesor? Profesor { get; set; }

        public int EstudianteId { get; set; }

        public Estudiante? Estudiante { get; set;}



    }
}
