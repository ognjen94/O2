using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace System {
	public class AccommodationType {

		private int id;
		private string name;
        [JsonIgnore]
        public List<Accommodation> m_Accommodation { get; set; }

		public AccommodationType(){

		}

		~AccommodationType(){

		}

		public int Id{
			get{
				return id;
			}
			set{
				id = value;
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

	}//end AccommodationType

}//end namespace System