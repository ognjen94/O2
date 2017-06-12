using System;
using System.Collections.Generic;
using System.Text;
using System.IO;


namespace System {
	public class RoomReservations {

        private int id;
		private DateTime? endDate;
		private DateTime? startDate;
		private DateTime? timestamp;

		public RoomReservations(){

		}

		~RoomReservations(){

		}

        public int Id
        {
            get
            {
                return id;
            }
            set
            {
                id = value;
            }
        }

        public DateTime? EndDate
        {
			get{
				return endDate;
			}
			set{
				endDate = value;
			}
		}

		public DateTime? StartDate
        {
			get{
				return startDate;
			}
			set{
				startDate = value;
			}
		}

		public DateTime? Timestamp{
			get{
				return timestamp;
			}
			set{
				timestamp = value;
			}
		}

	}
}