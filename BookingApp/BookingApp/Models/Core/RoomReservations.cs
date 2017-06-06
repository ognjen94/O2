///////////////////////////////////////////////////////////
//  RoomReservations.cs
//  Implementation of the Class RoomReservations
//  Generated by Enterprise Architect
//  Created on:      06-Jun-2017 00:33:18
//  Original author: Alexis
///////////////////////////////////////////////////////////

using System;
using System.Collections.Generic;
using System.Text;
using System.IO;


namespace System {
	public class RoomReservations {

        private int id;
		private string endDate;
		private string startDate;
		private DateTime timestamp;
		public List<User> m_User;
		public List<Room> m_Room;

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

        public string EndDate{
			get{
				return endDate;
			}
			set{
				endDate = value;
			}
		}

		public string StartDate{
			get{
				return startDate;
			}
			set{
				startDate = value;
			}
		}

		public DateTime Timestamp{
			get{
				return timestamp;
			}
			set{
				timestamp = value;
			}
		}

	}//end RoomReservations

}//end namespace System