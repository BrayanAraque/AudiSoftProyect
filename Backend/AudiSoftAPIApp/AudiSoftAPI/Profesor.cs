using System.ComponentModel.DataAnnotations;

namespace AudiSoftAPI
{
    public class Profesor
    {
        public int Id {  get; set; }

        [StringLength(20)]
        public string ProfesorName { get; set; } = string.Empty;

        


    }
}
