# sayHi(){
#   echo "Hello, $1"
# }

# sayHi(){
#   if [ "$1" ]
#     then
#       echo "Hello, $1"
#     else
#       echo "Hello, World."
#   fi
# }

# sayTimes(){
#   for (( i=0; i<="$1"; i++ ))
#     do
#       sleep 1
#       say "$i"
#       echo "$i"
#     done
# }

mcd(){
  echo "--------------------"
  if [ "$1" ]
    then
      echo "Made file $1"
      mkdir "$1"
      cd "$1"
    else
        echo "Please enter a name."
    fi
  echo "--------------------"
}