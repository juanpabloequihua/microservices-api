from main import redis, Order
import time

key = 'refund_order'
group = 'payment_group'

try:
    redis.xgroup_create(key, group)
except:
    print("Group already exists.")

## consume the inventory group:
while True:
    try: 
        results = redis.xreadgroup(group, key, {key: '>' }, None)
        if results != []:
            for result in results:
                obj = result[1][0][1]
                order = Order.get(obj['pk'])
                order.status = 'refunded'
                order.save()

    except Exception as e:
        print(str(e))
    # Make the code to read messages every second:
    time.sleep(1)
    
