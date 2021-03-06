using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace System {
	public class Accommodation {

        private int id;
        private string name;
        private string description;
        private string address;		
		private float averageGrade;
		private double latitude;
		private double longitude;
        private string imageURL;
        private bool approved;

        [JsonIgnore]
        public List<Comment> m_Comment { get; set; }
        [JsonIgnore]
        public List<Room> m_Room { get; set; }

        [Required]
        public AccommodationType accommodationType { get; set; }

        [Required]
        public Place place { get; set; }

        [Required]
        public AppUser owner { get; set; }

        public Accommodation(){

		}

		~Accommodation(){

		}

		public string Address{
			get{
				return address;
			}
			set{
				address = value;
			}
		}

		public bool Approved{
			get{
				return approved;
			}
			set{
				approved = value;
			}
		}

		public float AverageGrade{
			get{
				return averageGrade;
			}
			set{
				averageGrade = value;
			}
		}

		public string Description{
			get{
				return description;
			}
			set{
				description = value;
			}
		}

		public int Id{
			get{
				return id;
			}
			set{
				id = value;
			}
		}

		public string ImageURL{
			get{
				return imageURL;
			}
			set{
				imageURL = value;
			}
		}

		public double Latitude{
			get{
				return latitude;
			}
			set{
				latitude = value;
			}
		}

		public double Longitude{
			get{
				return longitude;
			}
			set{
				longitude = value;
			}
		}

		public string Name{
			get{
				return name;
			}
			set{
				name = value;
			}
		}

	}

}