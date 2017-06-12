using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace System {
	public class Room {

		private int bedCount;
		private string description;
		private int id;
		private int pricePerNight;
		private int roomNumber;
		public List<RoomReservations> m_RoomReservations { get; set; }

        [Required]
        public Accommodation accomodation { get; set; }

        public Room(){

		}

		~Room(){

		}

		public int BedCount{
			get{
				return bedCount;
			}
			set{
				bedCount = value;
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

		public int PricePerNight{
			get{
				return pricePerNight;
			}
			set{
				pricePerNight = value;
			}
		}

		public int RoomNumber{
			get{
				return roomNumber;
			}
			set{
				roomNumber = value;
			}
		}

	}
}