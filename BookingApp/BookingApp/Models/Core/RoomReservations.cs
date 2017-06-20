using System;
using System.Collections.Generic;
using System.Text;
using System.IO;


namespace System {
	public class RoomReservation {

        private int id;
		private string endDate;
		private string startDate;
		private string timestamp;

		public RoomReservation(){

		}

		~RoomReservation(){

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

        public string EndDate
        {
			get{
				return endDate;
			}
			set{
				endDate = value;
			}
		}

		public string StartDate
        {
			get{
				return startDate;
			}
			set{
				startDate = value;
			}
		}

		public string Timestamp
        {
			get{
				return timestamp;
			}
			set{
				timestamp = value;
			}
		}

	}
}