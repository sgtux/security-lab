using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using Site.Enums;
using Site.Extentions;

namespace Site.Models
{
  public class SimulationModel : BaseEntity
  {
    [Required]
    public string Description { get; set; }

    [Required, Range(2, 72)]
    public int Plots { get; set; }

    [Required, Range(100, 1000000)]
    public decimal Amount { get; set; }

    public long UserId { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime? ApprovedAt { get; set; }

    public List<SimulationInstallmentModel> Installments { get; set; }

    public UserModel User { get; set; }

    public decimal Total => Installments?.Sum(p => p.Total) ?? 0;

    public string TotalMoney => Total.ToMoney();

    public string AmountMoney => Amount.ToMoney();

    public string CreatedAtFormatted => CreatedAt.ToString("dd/MM/yyyy - HH:mm");

    public string ApprovedAtFormatted => ApprovedAt?.ToString("dd/MM/yyyy - HH:mm");

    public override string EntityName => "Simulation";
  }
}