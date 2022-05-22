using System.ComponentModel.DataAnnotations;

namespace WhatsAppRating.Models
{
    public class Rating
    {
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        [RegularExpression(@"^(?!\s*$).+$")]
        public string? Nickname { get; set; }

        [Required]
        [Range(1, 5)]
        public int Rate { get; set; }

        [StringLength(2000)]
        public string? Description { get; set; }

        [Required]
        public DateTime Time { get; set; }
    }
}
