import React, { useState } from "react";
import { FlatList } from "react-native";
import TouchableOpacityComponent from './TouchableOpacityComponent'

const {log} =console

const FlatListComponent = (props) => {
  const [selectedId, setSelectedId] = useState(null)

  
  return (
      <FlatList
        numColumns ={2}
        data={props.data}
        keyExtractor={item => item.id}
        renderItem= { ({item}) =>
                <TouchableOpacityComponent
                    backgroundColor = {item.id === selectedId ? "black" : "#34ace0"}
                    caption={item.title}
                    OnPress={() => {
                        setSelectedId(item.id)
                        props.callback(item.id)
                                             
                      }
                    }

                    
                />
        }
       />
 
  )
}

export default FlatListComponent;
//module.exports={FlatListComponent}