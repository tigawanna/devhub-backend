#!/usr/bin/env bash

package=$1
if [[ -z "$package" ]]; then
  echo "usage: $0 <package-name>"
  exit 1
fi
package_split=(${package//\// })
package_name=${package_split[-1]}
# you can also build for other platforms like so 
# platforms=("linux/amd64" "windows/amd64")
platforms=("linux/amd64")
rm pocketbase
# rm pocketbase.exe
for platform in "${platforms[@]}"
do
echo "building executable for $platform"

    platform_split=(${platform//\// })
    GOOS=${platform_split[0]}
    GOARCH=${platform_split[1]}
    # output_name=$package_name'-'$GOOS'-'$GOARCH
    output_name="pocketbase"
    if [ $GOOS = "windows" ]; then
        output_name+='.exe'
    fi    


    env GOOS=$GOOS GOARCH=$GOARCH CGO_ENABLED=0 go build -o $output_name *.go
    if [ $? -ne 0 ]; then
           echo 'An error has occurred! Aborting the script execution...'
        exit 1
    fi
done

