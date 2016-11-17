FILES :=                            \
    IDB3.py                     	\
    static/                     	\
    templates/                    	\
    app/models.py					\
    app/tests.py					\
    # app/tests.out					\
 	# IDB3.html						\
 	# IDB3.log						\
 	# IDB3.pdf						\
 	.gitignore						\
 	.travis.yml						\
 	makefile						  

IDB.log:
	git log > IDB3.log

IDB.html: IDB3.py
	pydoc -w IDB3

check:
	@not_found=0;                                 \
    for i in $(FILES);                            \
    do                                            \
        if [ -e $$i ];                            \
        then                                      \
            echo "$$i found";                     \
        else                                      \
            echo "$$i NOT FOUND";                 \
            not_found=`expr "$$not_found" + "1"`; \
        fi                                        \
    done;                                         \
    if [ $$not_found -ne 0 ];                     \
    then                                          \
        echo "$$not_found failures";              \
        exit 1;                                   \
    fi;                                           \
    echo "success";

clean:
	rm -f *.pyc
	rm -f IDB3.log
	rm -f IDB3.html

test: IDB.html IDB.log check
